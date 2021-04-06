export default function Header(vivek) 
{
    console.log(vivek)
    return (
        <div>
            <div>
                Vivek singh bhadauria
            </div>
            <div>
                Project
            </div>
            {vivek.a}
            {vivek.children}
        </div>
    )
}