import useClock from '../../hooks/useClock';

function ClockList() {
  const { clock: local } = useClock();
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: pakistan } = useClock('UTC', 5 * 60);
  const { clock: edt } = useClock('EDT');
  const { clock: british } = useClock('BST');
  const { clock: mst } = useClock('MST');

  console.log('local', local.date);
  console.log('est', est.date);
  console.log('pst', pst.date);
  console.log('pakistan', pakistan.date);
  console.log('edt', edt.date);
  console.log('british', british.date);
  console.log('mst', mst.date);

  return (
    <div>
      <h1> Local Clock</h1>
    </div>
  );
}

export default ClockList;
