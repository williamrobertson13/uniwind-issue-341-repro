import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1210 } from '../generated/copy/copy1210';
import { layout1210 } from '../generated/layouts/layout1210';
import { palette1210 } from '../generated/palettes/palette1210';

const RuntimeView1210 = withUniwind(View);

export function Screen1210() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1210 styleClassName={layout1210.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1210.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1210.detail} / {palette1210.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
