import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1389 } from '../generated/copy/copy1389';
import { layout1389 } from '../generated/layouts/layout1389';
import { palette1389 } from '../generated/palettes/palette1389';

const RuntimeView1389 = withUniwind(View);

export function Screen1389() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1389 styleClassName={layout1389.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1389.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1389.detail} / {palette1389.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
