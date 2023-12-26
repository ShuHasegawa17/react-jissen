import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import yup from './yup.jp'; //設定を上書きしたyupにする

// 独自ルール（汎用化）
yup.addMethod(yup.string, 'ng', function () {
  // アロー関数不可(thisを使うため)
  return this.test(
    'ng',
    ({ label }) => `${label}にNGワードがあります。`,
    (value) => {
      const ngs = ['暴力', '死', 'グロ'];
      for (const ng of ngs) {
        if (value.includes(ng)) {
          return false;
        }
      }
      return true;
    }
  );
});

// 検証ルールを定義
const schema = yup.object({
  name: yup
    .string()
    .label('名前')
    .trim()
    .lowercase()
    // .required('${label}は必須入力です')
    // .max(20, '${label}は${max}文字以内で入力してください')
    .required()
    .max(20)
    .ng(),
  gender: yup.string().label('性別').required('${label}は必須です。'),
  memo: yup
    .string()
    .label('備考')
    .transform((value, _orgValue) => value.normalize('NFKC'))
    // .required('${label}は必須入力です。')
    // .min(10, '${label}は${min}文字以上を入力してください。')
    .required()
    .min(10)
    .ng(),
});

export default function FormYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: 'てすとたろう',
      gender: 'male',
      memo: '',
    },
    //検証をyupに委ねる
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  const onError = (err) => console.log(err);
  const styleRed = { color: 'red' };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <div>
        <label htmlFor="name">名前：</label>
        <input id="name" type="text" {...register('name')} />
        <div style={styleRed}>{errors.name?.message}</div>
      </div>
      <div>
        <label htmlFor="gender">性別：</label>
        <label>
          <input type="radio" value="male" {...register('gender')} />
          男性
        </label>
        <label>
          <input type="radio" value="female" {...register('gender')} />
          女性
        </label>
        <div style={styleRed}>{errors.gender?.message}</div>
      </div>
      <div>
        <label htmlFor="memo">備考：</label>
        <textarea id="memo" {...register('memo')} />
        <div style={styleRed}>{errors.memo?.message}</div>
      </div>
      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
