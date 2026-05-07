import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy287 } from '../generated/copy/copy287';
import { layout287 } from '../generated/layouts/layout287';
import { palette287 } from '../generated/palettes/palette287';

const RuntimeView287 = withUniwind(View);

export function Screen287() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView287 styleClassName={layout287.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy287.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy287.detail} / {palette287.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
