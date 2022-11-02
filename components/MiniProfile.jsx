export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-8 ml-3">
        <img src='https://avatars.githubusercontent.com/u/78082985?s=400&u=bca0e4d2c7282218a9f41d808fd85d7f1a5eb8e4&v=4' alt='user_image' className='rounded-full h-16 cursor-pointer border p-[2px]' />
        <div className="flex-1 ml-4">
            <h2 className="font-bold">ROUANE Mouaad</h2>
            <h3 className="text-sm text-gray-400">Welcome to LavalSquare</h3>
        </div>
        <button className="font-semibold text-blue-400 text-sm blue_btn">Sign out</button>
    </div>
  )
}
