import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy443 } from '../generated/copy/copy443';
import { layout443 } from '../generated/layouts/layout443';
import { palette443 } from '../generated/palettes/palette443';

const RuntimeView443 = withUniwind(View);

export function Screen443() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView443 styleClassName={layout443.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy443.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy443.detail} / {palette443.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
