import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { CapabilityBringTechnology } from "../../assets/illustrations/capability/CapabilityBringTechnology";
import { CapabilityBuildYourDigital } from "../../assets/illustrations/capability/CapabilityBuildYourDigital";
import { CapabilityMakeYourBusiness } from "../../assets/illustrations/capability/CapabilityMakeYourBusiness";
import "./capability.css";

/**
 *
 */
export class Capability {

  private illustration_capability_make_your_business: HTMLElement;

  private illustration_capability_build_your_digital: HTMLElement;

  private illustration_capability_bring_technology: HTMLElement;

  constructor() {
    //вставляем иконки стрелки по всем элементам с классом .arrow
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.innerHTML = ArrowIcon;
    });
    this.illustration_capability_make_your_business = document.querySelector(
      "#Capability_Make_Your_Business"
    ) as HTMLElement;

    this.illustration_capability_build_your_digital = document.querySelector(
      "#Capability_Build_Your_Digital"
    ) as HTMLElement;

    this.illustration_capability_bring_technology = document.querySelector(
      "#Capability_Bring_Technology"
    ) as HTMLElement;

    this.illustration_capability_make_your_business.innerHTML =
      CapabilityMakeYourBusiness;
    this.illustration_capability_build_your_digital.innerHTML =
      CapabilityBuildYourDigital;
    this.illustration_capability_bring_technology.innerHTML =
      CapabilityBringTechnology;
  }

}
