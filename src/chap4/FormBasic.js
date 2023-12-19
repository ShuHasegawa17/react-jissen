import { useForm } from 'react-hook-form';
export default function FormBasic() {
  const defaultValues = {
    name: 'hase',
    email: 'admin@exapmle.com',
    gender: '',
    memo: '',
  };

  // フォームの初期化
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => console.log(data);
  const onError = (err) => console.log(err);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
      <div>
        <label htmlFor="name">名前：</label>
        <input
          id="name"
          type="text"
          {...register('name', {
            required: '名前は必須です',
            maxLength: {
              value: 20,
              message: '20文字以内で',
            },
          })}
        ></input>
        <div style={{ color: 'red' }}>{errors.name?.message}</div>
      </div>

      <div>
        <label htmlFor="gender">性別：</label>
        <label>
          <input
            value="male"
            type="radio"
            {...register('gender', {
              required: '性別は必須です',
            })}
          />
          男性
        </label>

        <label>
          <input
            value="female"
            type="radio"
            {...register('gender', {
              required: '性別は必須です',
            })}
          />
          女性
        </label>
        <div>{errors.gender?.message}</div>

        <div style={{ color: 'red' }}>{errors.gender?.message}</div>
      </div>

      <div>
        <label htmlFor="memo">備考：</label>
        <textarea
          id="memo"
          {...register('memo', {
            required: '備考は必須です',
            validate: (value, formValues) => {
              const ngs = ['暴力', 'グロ', '死'];
              for (const ng of ngs) {
                if (value.includes(ng)) {
                  return 'NGワードあり';
                }
              }
              return true;
            },
            minLength: {
              value: 10,
              message: '10文字以内で',
            },
          })}
        ></textarea>
        <div style={{ color: 'red' }}>{errors.memo?.message}</div>
      </div>

      <div>
        <button type="submit">送信</button>
      </div>
    </form>
  );
}
