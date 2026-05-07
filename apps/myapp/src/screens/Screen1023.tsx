import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1023 } from '../generated/copy/copy1023';
import { layout1023 } from '../generated/layouts/layout1023';
import { palette1023 } from '../generated/palettes/palette1023';

const RuntimeView1023 = withUniwind(View);

export function Screen1023() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView1023 styleClassName={layout1023.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1023.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1023.detail} / {palette1023.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
