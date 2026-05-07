import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy653 } from '../generated/copy/copy653';
import { layout653 } from '../generated/layouts/layout653';
import { palette653 } from '../generated/palettes/palette653';

const RuntimeView653 = withUniwind(View);

export function Screen653() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView653 styleClassName={layout653.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy653.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy653.detail} / {palette653.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
