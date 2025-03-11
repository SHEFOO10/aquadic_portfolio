import PagesHeader from "@/components/general/PagesHeader"
import TeamCards from "@/components/Team/TeamCards"
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";

const Team = () => {
    const { t } = useTranslation("team");
    return (
        <div>
            <PagesHeader
                sheader={t('bestTalent')}
                title={t('teamTitle')}
            />
            <TeamCards />
        </div>
    )
}

export default Team
