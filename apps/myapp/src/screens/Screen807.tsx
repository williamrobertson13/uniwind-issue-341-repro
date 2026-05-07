import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy807 } from '../generated/copy/copy807';
import { layout807 } from '../generated/layouts/layout807';
import { palette807 } from '../generated/palettes/palette807';

const RuntimeView807 = withUniwind(View);

export function Screen807() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView807 styleClassName={layout807.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy807.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy807.detail} / {palette807.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
