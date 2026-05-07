import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy785 } from '../generated/copy/copy785';
import { layout785 } from '../generated/layouts/layout785';
import { palette785 } from '../generated/palettes/palette785';

const RuntimeView785 = withUniwind(View);

export function Screen785() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView785 styleClassName={layout785.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy785.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy785.detail} / {palette785.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
