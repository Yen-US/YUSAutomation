import LogoIconComponent from "@/components/logo-icon";
import LogoLettersComponent from "@/components/logo-letters";



export default function Logo() {

    return (
        <div className="flex items-center gap-2">
            <LogoIconComponent className="w-14 h-14 fill-foreground">YUS Automation</LogoIconComponent>
            <LogoLettersComponent className="w-24 h-16 fill-foreground">YUS Automation</LogoLettersComponent>
        </div>

    )
}
