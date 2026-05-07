import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy927 } from '../generated/copy/copy927';
import { layout927 } from '../generated/layouts/layout927';
import { palette927 } from '../generated/palettes/palette927';

const RuntimeView927 = withUniwind(View);

export function Screen927() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView927 styleClassName={layout927.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy927.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy927.detail} / {palette927.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
