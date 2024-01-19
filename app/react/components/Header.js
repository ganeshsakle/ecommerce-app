const Header = () => {
    return (
        <div class="flex flex-row my-2 shadow-lg ">
        <p class="font-medium text-green-600 ml-1 px-3 py-2">Buy-Me!</p>
        <input class="placeholder:italic placeholder:text-slate-400 block rounded-md py-2 pl-9 pr-3 focus:outline-none border-green-600 focus:ring-green-600 focus:ring-1 sm:text-sm" placeholder="Search for Products" type="text" name="search"/>
        <p class="rounded-lg ml-1 px-3 py-2 text-slate-700 font-medium hover:bg-green-600 hover:text-slate-900">About</p>
        <p class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-green-600 hover:text-slate-900">Cart</p>
        <p class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-green-600 hover:text-slate-900">Home</p>
        </div>
    );

}

export default Header;