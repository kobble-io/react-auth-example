import {ReactLogo} from "./ReactLogo";
import {KobbleLogo} from "./KobbleLogo";

export const PoweredBy = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-2">
                <ReactLogo />
                <span>+</span>
                <KobbleLogo />
            </div>
            <div className={'text-center'}>
                <span>Authentication Example</span>
            </div>
        </div>
    );
}