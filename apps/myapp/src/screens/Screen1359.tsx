import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1359 } from '../generated/copy/copy1359';
import { layout1359 } from '../generated/layouts/layout1359';
import { palette1359 } from '../generated/palettes/palette1359';

const RuntimeView1359 = withUniwind(View);

export function Screen1359() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1359 styleClassName={layout1359.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1359.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1359.detail} / {palette1359.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
