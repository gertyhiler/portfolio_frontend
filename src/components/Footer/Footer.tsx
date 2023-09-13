import {AboutProject} from "@/components/AboutProject/AboutProject";

export function Footer () {
    return (
        <footer>
            <AboutProject/>
            <div className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 rounded-t-lg">
                <div className="mx-auto max-w-screen-xl text-center">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/#" className="hover:underline">Created By Andrew Korobka™</a>. Все права защищены.</span>
                </div>
            </div>
        </footer>
    )
}