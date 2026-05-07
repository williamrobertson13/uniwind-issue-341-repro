import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1221 } from '../generated/copy/copy1221';
import { layout1221 } from '../generated/layouts/layout1221';
import { palette1221 } from '../generated/palettes/palette1221';

const RuntimeView1221 = withUniwind(View);

export function Screen1221() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1221 styleClassName={layout1221.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1221.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1221.detail} / {palette1221.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
