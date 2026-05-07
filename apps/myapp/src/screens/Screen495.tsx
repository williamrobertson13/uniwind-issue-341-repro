import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy495 } from '../generated/copy/copy495';
import { layout495 } from '../generated/layouts/layout495';
import { palette495 } from '../generated/palettes/palette495';

const RuntimeView495 = withUniwind(View);

export function Screen495() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView495 styleClassName={layout495.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy495.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy495.detail} / {palette495.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
