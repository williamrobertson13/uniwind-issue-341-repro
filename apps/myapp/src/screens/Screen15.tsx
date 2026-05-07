import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy15 } from '../generated/copy/copy15';
import { layout15 } from '../generated/layouts/layout15';
import { palette15 } from '../generated/palettes/palette15';

const RuntimeView15 = withUniwind(View);

export function Screen15() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView15 styleClassName={layout15.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy15.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy15.detail} / {palette15.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
