import BackHome from '@/components/back-button';
import ContainerFullWidth from '@/components/container-full';
import InfoSection from '@/components/info-section';
import { useTranslation } from '@/hooks/useTranslation';

const RunningPRs = [
  { distance: '5 km', time: '18:22', date: '1-9-2025' },
  { distance: '10 km', time: '39:50', date: '17-10-2024' },
  { distance: '21.1 km', time: '1:24:11', date: '12-10-2025' },
  { distance: 'Marathon', time: '3:29:39', date: '14-4-2024' },
];

export default function AboutContent() {
  const { t } = useTranslation();

  return (
    <ContainerFullWidth>
      <BackHome href="/">{`home`}</BackHome>
      <h1>{t('pages.about.title')}</h1>
      {t('pages.wip')}
      <InfoSection
        title={t('pages.about.sports.title')}
        borderColor="#00CC00"
        backgroundColour="rgb(0, 150, 0, 0.1)"
      >
        <div className="flex">
          <div>
            <p className="mb-2">{t('pages.about.sports.description1')}</p>
            <img
              src="/assets/tijdlijn_sport_engels-removebg.png"
              alt="Timeline of my sports career"
              className="mb-0"
            />
          </div>
          <div className="ml-8 w-150 border-1 p-3">
            <h3 className="card-title mb-2">Running PRs</h3>
            {RunningPRs.map((pr) => (
              <div className="grid grid-cols-3 gap-x-2">
                <div className="my-auto items-center overflow-clip">{pr.distance}</div>

                <div className="my-auto items-center font-mono font-semibold">{pr.time}</div>
                <div className="my-auto flex text-xs">{pr.date}</div>
              </div>
            ))}
          </div>
        </div>
      </InfoSection>
    </ContainerFullWidth>
  );
}
