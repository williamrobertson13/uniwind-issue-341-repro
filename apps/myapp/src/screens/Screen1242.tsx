import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1242 } from '../generated/copy/copy1242';
import { layout1242 } from '../generated/layouts/layout1242';
import { palette1242 } from '../generated/palettes/palette1242';

const RuntimeView1242 = withUniwind(View);

export function Screen1242() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1242 styleClassName={layout1242.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1242.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1242.detail} / {palette1242.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
