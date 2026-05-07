import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy673 } from '../generated/copy/copy673';
import { layout673 } from '../generated/layouts/layout673';
import { palette673 } from '../generated/palettes/palette673';

const RuntimeView673 = withUniwind(View);

export function Screen673() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView673 styleClassName={layout673.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy673.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy673.detail} / {palette673.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
