import Image from 'next/image';

interface ScreenshotItemProps {
  label: string;
  heading: string;
  src: string;
  alt: string;
  isRaised?: boolean;
}

const SCREENSHOT_WIDTH = 1080;
const SCREENSHOT_HEIGHT = 2080;

const SCREENSHOTS: ScreenshotItemProps[] = [
  {
    label: 'Workout builder',
    heading: 'Stel trainingen samen met de intuïtieve workout builder',
    src: '/assets/stride/workout_builder.jpg',
    alt: 'Screenshot van de workout builder in Stride, met trainingsblokken en tempozones',
    isRaised: false,
  },
  {
    label: 'Coaching dashboard',
    heading: 'Houd overzicht over je trainees',
    src: '/assets/stride/coaching_dashboard.jpg',
    alt: 'Screenshot van het coachingdashboard in Stride, met de weekvoortgang van alle trainees',
    isRaised: true,
  },
  {
    label: "Trainingsschema's",
    heading: "Maak eenvoudig trainingsschema's voor al je trainees",
    src: '/assets/stride/training_plan.jpg',
    alt: 'Screenshot van een trainingsschema in Stride, met de workouts per dag van de week',
    isRaised: false,
  },
];

function ScreenshotItem({ label, heading, src, alt, isRaised }: ScreenshotItemProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-3">
        <span className="h-[3px] w-6 rounded-full" style={{ backgroundColor: '#84cc16' }} />
        <p
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: '#65a30d', fontFamily: 'inherit', fontWeight: 700 }}
        >
          {label}
        </p>
        <span className="h-[3px] w-6 rounded-full" style={{ backgroundColor: '#84cc16' }} />
      </div>
      <h2
        className="mx-auto mt-3 max-w-[18rem] text-center"
        style={{
          color: '#18181b',
          fontFamily: 'inherit',
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
          marginBottom: 0,
        }}
      >
        {heading}
      </h2>

      {/* Pushed to the bottom so the phones line up when headings wrap differently;
          the outer phones sit lower on desktop for a staggered look */}
      <div
        className={`relative mt-auto flex justify-center pt-5 ${isRaised ? '' : 'md:translate-y-12'}`}
      >
        {/* Soft lime glow behind the phone */}
        <div
          className="pointer-events-none absolute inset-x-6 top-1/3 bottom-0 rounded-full"
          style={{ backgroundColor: '#bef264', opacity: 0.45, filter: 'blur(48px)' }}
        />

        {/* Phone frame: the screenshots' black app bar blends into the bezel */}
        <div
          className="relative w-full max-w-[16.5rem] rounded-[1.5rem] p-1 transition-transform duration-300 ease-out hover:-translate-y-2"
          style={{
            backgroundColor: '#18181b',
            boxShadow:
              '0 1px 0 rgba(255, 255, 255, 0.08) inset, 0 24px 48px -12px rgba(24, 24, 27, 0.35), 0 8px 16px -8px rgba(24, 24, 27, 0.2)',
          }}
        >
          <div className="overflow-hidden rounded-[1.25rem]">
            <Image
              src={src}
              alt={alt}
              width={SCREENSHOT_WIDTH}
              height={SCREENSHOT_HEIGHT}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScreenshotsSection() {
  return (
    <section
      className="overflow-hidden px-6 pt-20 pb-24 md:pb-32"
      style={{
        background: 'linear-gradient(180deg, #f8faf5 0%, #f7fee7 100%)',
      }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-20 md:grid-cols-3 md:gap-10">
        {SCREENSHOTS.map((screenshot) => (
          <ScreenshotItem key={screenshot.src} {...screenshot} />
        ))}
      </div>
    </section>
  );
}
