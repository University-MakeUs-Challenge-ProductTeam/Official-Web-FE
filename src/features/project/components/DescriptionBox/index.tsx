import Typography from '@/components/common/Typography';

type TDescriptionBoxProps = {
  description: string;
};

const DescriptionBox = ({ description }: TDescriptionBoxProps) => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-[32px] border border-white/5 bg-white/5 p-8 backdrop-blur-3xl transition-all hover:border-main-green/30 hover:bg-main-green/5">
      <div className="space-y-2">
        <Typography className="text-xs font-bold uppercase tracking-widest text-main-green">About</Typography>
        <Typography className="text-2xl font-black italic tracking-tighter text-white">
          PROJECT <span className="text-white/20">OVERVIEW</span>
        </Typography>
      </div>
      <Typography className="flex-1 flex-wrap whitespace-pre-wrap text-lg font-medium leading-relaxed text-white/70">{description}</Typography>
    </div>
  );
};

export default DescriptionBox;
