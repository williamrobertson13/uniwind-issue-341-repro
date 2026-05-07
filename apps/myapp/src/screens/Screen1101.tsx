import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1101 } from '../generated/copy/copy1101';
import { layout1101 } from '../generated/layouts/layout1101';
import { palette1101 } from '../generated/palettes/palette1101';

const RuntimeView1101 = withUniwind(View);

export function Screen1101() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1101 styleClassName={layout1101.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1101.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1101.detail} / {palette1101.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
