import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1066 } from '../generated/copy/copy1066';
import { layout1066 } from '../generated/layouts/layout1066';
import { palette1066 } from '../generated/palettes/palette1066';

const RuntimeView1066 = withUniwind(View);

export function Screen1066() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1066 styleClassName={layout1066.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy1066.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1066.detail} / {palette1066.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
