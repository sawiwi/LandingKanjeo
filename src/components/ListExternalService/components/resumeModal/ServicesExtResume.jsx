

const ResumeServices = ({data}) => {
    console.log('data: ', data[0]?.name)
    return(
        <div>
            {
                data.length > 0 ? data.map(item => (
                    <div key={item.id}>
                        <h3>{item?.name || 'no hay' }</h3>

                    </div>

                )
                ):''
            }
        </div>
    )
}
export default ResumeServices;