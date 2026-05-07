import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1321 } from '../generated/copy/copy1321';
import { layout1321 } from '../generated/layouts/layout1321';
import { palette1321 } from '../generated/palettes/palette1321';

const RuntimeView1321 = withUniwind(View);

export function Screen1321() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView1321 styleClassName={layout1321.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1321.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1321.detail} / {palette1321.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
