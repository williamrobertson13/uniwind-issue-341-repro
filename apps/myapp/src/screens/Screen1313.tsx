import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1313 } from '../generated/copy/copy1313';
import { layout1313 } from '../generated/layouts/layout1313';
import { palette1313 } from '../generated/palettes/palette1313';

const RuntimeView1313 = withUniwind(View);

export function Screen1313() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1313 styleClassName={layout1313.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1313.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1313.detail} / {palette1313.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
