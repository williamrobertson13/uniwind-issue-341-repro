import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy594 } from '../generated/copy/copy594';
import { layout594 } from '../generated/layouts/layout594';
import { palette594 } from '../generated/palettes/palette594';

const RuntimeView594 = withUniwind(View);

export function Screen594() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView594 styleClassName={layout594.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy594.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy594.detail} / {palette594.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
