import { APP } from "../../app.js";
import { Configurations } from "../../config/config.js";
import { getMaterialIcon } from "../../lib/gtd-ts/material/materialicons.js";
import { isMobile, isSmallDevice } from "../../lib/gtd-ts/web/responsivetools.js";
import { UIComponent } from "../../lib/gtd-ts/web/uicomponent.js";

export class Sidebar extends UIComponent {

    private buttonBar : UIComponent;
    private userImage : UIComponent;
    private elements : UIComponent[];

    public constructor() {
        super({
            type: "div",
            id: "sidebar",
            classes: ["box-column","box-y-center"],
        });

        this.buttonBar = new UIComponent({
            type: "div",
            classes : ["box-y-center", "box-column"],
            styles: {
                height: "calc(100% - 2.5rem)",
                width : "100%",
            }
        });

        this.build();

        this.appendChild(this.buttonBar);
    }

    public build() {

        const home = this.createIcon("home",Configurations.VIEWS.HOME)
        const software = this.createIcon("code", Configurations.VIEWS.SOFTWARE);
        const games = this.createIcon("sport_esports", Configurations.VIEWS.GAMES);
        const media = this.createIcon("movie", Configurations.VIEWS.MEDIA);

        this.elements = [home,software]//,games, media];

        this.elements.forEach((element) => {
            this.buttonBar.appendChild(element);
        });

        if(isSmallDevice()) {
            const mobileSidebar = document.querySelector("header #mobile-sidebar") as HTMLElement;
            this.elements.forEach((element) => {
                mobileSidebar.appendChild(element.element);
            });
        }

    }


    public createIcon(icon : string, url : string) : UIComponent {

        return new UIComponent({
            type: "a",
            classes: ["sidebar-item","box-center"],
            text: getMaterialIcon(icon,{
                size: "1.25rem",
                fill: "#404040",
            }).toHTML(),
            attributes: { href: url },
        });

    }

    public setSelected(index: number) {
        this.elements.forEach(element => {
            element.element.classList.remove("selected");
        });

        if(index > this.elements.length - 1){
            index = this.elements.length - 1;
        }


        if(index >= 0){
            this.elements[index].element.classList.add("selected");
        }
    }

    public show(): void {

    };

}