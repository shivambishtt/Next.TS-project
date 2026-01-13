function EventAgenda({ agendas }: { agendas: string[] }) {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-semibold">Agenda</h2>
      <ul>
        {agendas.map((agenda, id) => {
          return <li key={id}>{agenda}</li>;
        })}
      </ul>
    </div>
  );
}
export default EventAgenda;
