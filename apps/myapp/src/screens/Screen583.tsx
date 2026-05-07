import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy583 } from '../generated/copy/copy583';
import { layout583 } from '../generated/layouts/layout583';
import { palette583 } from '../generated/palettes/palette583';

const RuntimeView583 = withUniwind(View);

export function Screen583() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView583 styleClassName={layout583.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy583.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy583.detail} / {palette583.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
