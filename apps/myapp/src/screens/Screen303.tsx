import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy303 } from '../generated/copy/copy303';
import { layout303 } from '../generated/layouts/layout303';
import { palette303 } from '../generated/palettes/palette303';

const RuntimeView303 = withUniwind(View);

export function Screen303() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView303 styleClassName={layout303.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy303.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy303.detail} / {palette303.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
