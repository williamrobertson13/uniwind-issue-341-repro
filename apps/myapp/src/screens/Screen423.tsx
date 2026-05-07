import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy423 } from '../generated/copy/copy423';
import { layout423 } from '../generated/layouts/layout423';
import { palette423 } from '../generated/palettes/palette423';

const RuntimeView423 = withUniwind(View);

export function Screen423() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView423 styleClassName={layout423.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy423.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy423.detail} / {palette423.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
