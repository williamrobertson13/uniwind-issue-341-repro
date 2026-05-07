import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy999 } from '../generated/copy/copy999';
import { layout999 } from '../generated/layouts/layout999';
import { palette999 } from '../generated/palettes/palette999';

const RuntimeView999 = withUniwind(View);

export function Screen999() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView999 styleClassName={layout999.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy999.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy999.detail} / {palette999.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
