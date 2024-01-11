import styles from "./attendance-table.module.css";

export function AttendanceTable(): JSX.Element {
  const attendances = [
    {
      id: "0001",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0002",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0003",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
    {
      id: "0004",
      name: "TEST Student",
      email: "hoge@example.com",
      createdAt: new Date("2024-01-11T11:44Z"),
    },
  ];

  return (
    <table className={styles.table}>
      <thead>
        <tr className="label-medium">
          <td>名前</td>
          <td>メールアドレス</td>
          <td>出席時刻</td>
        </tr>
      </thead>
      <tbody>
        {attendances.map(({ id, name, email, createdAt }) => (
          <tr className="label-large" key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{createdAt.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
