import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1125 } from '../generated/copy/copy1125';
import { layout1125 } from '../generated/layouts/layout1125';
import { palette1125 } from '../generated/palettes/palette1125';

const RuntimeView1125 = withUniwind(View);

export function Screen1125() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1125 styleClassName={layout1125.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1125.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1125.detail} / {palette1125.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
