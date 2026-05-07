import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1149 } from '../generated/copy/copy1149';
import { layout1149 } from '../generated/layouts/layout1149';
import { palette1149 } from '../generated/palettes/palette1149';

const RuntimeView1149 = withUniwind(View);

export function Screen1149() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1149 styleClassName={layout1149.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1149.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1149.detail} / {palette1149.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
