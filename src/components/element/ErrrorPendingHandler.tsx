export function ErrorPendingHandler(error?:string|null,isPending?:boolean){
if(error) return <h2>{error}</h2>

if(isPending) return <h2>در حال بارگذاری</h2>
}