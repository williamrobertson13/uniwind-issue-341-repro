import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy511 } from '../generated/copy/copy511';
import { layout511 } from '../generated/layouts/layout511';
import { palette511 } from '../generated/palettes/palette511';

const RuntimeView511 = withUniwind(View);

export function Screen511() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView511 styleClassName={layout511.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy511.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy511.detail} / {palette511.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
