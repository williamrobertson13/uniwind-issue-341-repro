import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1243 } from '../generated/copy/copy1243';
import { layout1243 } from '../generated/layouts/layout1243';
import { palette1243 } from '../generated/palettes/palette1243';

const RuntimeView1243 = withUniwind(View);

export function Screen1243() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1243 styleClassName={layout1243.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1243.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1243.detail} / {palette1243.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
