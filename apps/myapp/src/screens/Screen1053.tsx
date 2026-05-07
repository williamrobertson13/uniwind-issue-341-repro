import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1053 } from '../generated/copy/copy1053';
import { layout1053 } from '../generated/layouts/layout1053';
import { palette1053 } from '../generated/palettes/palette1053';

const RuntimeView1053 = withUniwind(View);

export function Screen1053() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1053 styleClassName={layout1053.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1053.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1053.detail} / {palette1053.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
