import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy655 } from '../generated/copy/copy655';
import { layout655 } from '../generated/layouts/layout655';
import { palette655 } from '../generated/palettes/palette655';

const RuntimeView655 = withUniwind(View);

export function Screen655() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView655 styleClassName={layout655.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy655.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy655.detail} / {palette655.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
