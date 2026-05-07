import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy961 } from '../generated/copy/copy961';
import { layout961 } from '../generated/layouts/layout961';
import { palette961 } from '../generated/palettes/palette961';

const RuntimeView961 = withUniwind(View);

export function Screen961() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView961 styleClassName={layout961.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy961.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy961.detail} / {palette961.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
