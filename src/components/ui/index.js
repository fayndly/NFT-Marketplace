import base from "@/components/ui/base";
import cards from "@/components/ui/cards";
import forms from "@/components/ui/forms";
import buttons from "@/components/ui/buttons";
import IconComponent from "@/components/ui/IconComponent.vue";
import AdditionalInfo from "@/components/ui/AdditionalInfo.vue";
import HeaderSection from "@/components/ui/HeaderSection.vue";

const components = [];
components.push(IconComponent);
components.push(AdditionalInfo);
components.push(HeaderSection);
components.push(...base);
components.push(...cards);
components.push(...forms);
components.push(...buttons);

export default components;
