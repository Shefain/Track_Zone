import  useClock  from '../../hooks/useClock';

function ClockList() {
  const { clock: local } = useClock();
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: edt } = useClock('EDT');
  const { clock: british } = useClock('BST');
  const { clock: mst } = useClock('MST');
  const { clock: nepal } = useClock('UTC', (60 * 5) + 45);

  console.log('local', local.date);
  console.log('est', est.date);
  console.log('pst', pst.date);
  console.log('edt', edt.date);
  console.log('british', british.date);
  console.log('mst', mst.date);
  console.log('Nepal', nepal.date);

  return (
    <div>
      <h1>Local Clock</h1>
      {/* Render other clock components or their information as needed */}
    </div>
  );
}

export default ClockList;
