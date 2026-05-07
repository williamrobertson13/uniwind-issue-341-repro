import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1259 } from '../generated/copy/copy1259';
import { layout1259 } from '../generated/layouts/layout1259';
import { palette1259 } from '../generated/palettes/palette1259';

const RuntimeView1259 = withUniwind(View);

export function Screen1259() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1259 styleClassName={layout1259.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1259.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1259.detail} / {palette1259.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
